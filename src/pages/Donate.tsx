import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { CreditCard, DollarSign, Heart, CheckCircle, ChevronRight, Users as UsersIcon } from 'lucide-react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isMonthly: false
  });
  
  const handleDonationSelection = (value: string) => {
    setDonationAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isMonthly: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    toast.success("Thank you for your donation!", {
      description: `Your ${formData.isMonthly ? 'monthly' : 'one-time'} donation of $${amount} has been processed.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your contribution helps us support service members, veterans, and their families.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6 text-navy">Donation Details</h2>
                    
                    <div className="mb-6">
                      <Label className="text-lg mb-2 block">Select Amount</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                        {['25', '50', '100', '250'].map(amount => (
                          <Button
                            key={amount}
                            type="button"
                            variant={donationAmount === amount ? "default" : "outline"}
                            className={donationAmount === amount ? "bg-navy" : "border-gray-300"}
                            onClick={() => handleDonationSelection(amount)}
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input
                          type="number"
                          placeholder="Custom Amount"
                          className="pl-10"
                          value={customAmount}
                          onChange={handleCustomAmount}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="monthly" 
                          checked={formData.isMonthly}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <label 
                          htmlFor="monthly" 
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Make this a monthly donation
                        </label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're donating or share a message of support"
                        rows={3}
                      />
                    </div>
                    
                    <div className="mb-6">
                      <Label className="text-lg mb-2 block">Payment Method</Label>
                      <RadioGroup 
                        defaultValue="creditCard" 
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="creditCard" id="creditCard" />
                          <Label htmlFor="creditCard" className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5" /> Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border p-3">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {paymentMethod === 'creditCard' && (
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 1234 1234 1234" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiration">Expiration Date</Label>
                            <Input id="expiration" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">Security Code (CVV)</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button type="submit" className="w-full bg-deepred hover:bg-red-700 text-white py-3 text-lg">
                      Complete Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-navy">Your Impact</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>$25</strong> provides a care package for a deployed service member
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>$50</strong> helps fund recreational activities for military families
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>$100</strong> contributes to emergency financial assistance for veterans
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        <strong>$250</strong> supports mental health services for returning soldiers
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <h3 className="font-semibold text-lg">Ways to Help</h3>
                    <a href="#" className="flex items-center text-navy hover:text-deepred">
                      <Heart className="mr-2" size={18} /> Start a Fundraiser <ChevronRight size={16} className="ml-1" />
                    </a>
                    <a href="#" className="flex items-center text-navy hover:text-deepred">
                      <UsersIcon className="mr-2" size={18} /> Volunteer <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
