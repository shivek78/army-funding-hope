
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from 'sonner';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  goal: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Goal must be a positive number.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  imageUrl: z.string().url({
    message: "Please enter a valid image URL.",
  }).optional(),
});

const categories = ['Medical', 'Family', 'Equipment', 'Education', 'Housing'];

const CreateCampaign = () => {
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      goal: "",
      category: "",
      imageUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would send data to a backend
    console.log(values);
    
    toast.success("Campaign request submitted successfully", {
      description: "Your campaign request has been received and is under review.",
    });
    
    // Redirect to campaigns page after submission
    setTimeout(() => {
      navigate("/campaigns");
    }, 2000);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Create a Campaign</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Submit a request to create a new fundraising campaign for our military community.
          </p>
        </div>
      </section>
      
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Campaign Title</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Medical Support for Veterans" {...field} />
                          </FormControl>
                          <FormDescription>
                            Create a clear, compelling title for your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Campaign Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your campaign goal, who it will help, and why it's important..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Provide details about your campaign's purpose and impact.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fundraising Goal ($)</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" placeholder="e.g., 5000" {...field} />
                          </FormControl>
                          <FormDescription>
                            Set a realistic fundraising goal in USD.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Choose the category that best fits your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="imageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Campaign Image URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/image.jpg" {...field} />
                          </FormControl>
                          <FormDescription>
                            Provide a URL to an image that represents your campaign (optional).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end gap-4 pt-4">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => navigate("/campaigns")}
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-deepred hover:bg-red-700 text-white"
                      >
                        Submit Campaign
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CreateCampaign;
