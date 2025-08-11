import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle } from 'lucide-react';

interface WaitingListFormProps {
  onClose?: () => void;
}

function WaitingListForm({ onClose }: WaitingListFormProps) {
  const [state, handleSubmit] = useForm("manbazbj");

  if (state.succeeded) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank you for joining!
            </h3>
            <p className="text-gray-600 mb-6">
              We've added you to our waiting list. You'll be among the first to know when HopSafe launches in your area.
            </p>
            {onClose && (
              <Button onClick={onClose} className="w-full">
                Close
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Join the Waiting List 🚌
        </CardTitle>
        <CardDescription className="text-gray-600">
          Be among the first to experience HopSafe's real-time bus tracking system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              type="text"
              name="organization"
              placeholder="School, company, or organization name"
              className="w-full"
            />
            <ValidationError 
              prefix="Organization" 
              field="organization"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full"
            />
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your transportation needs or any questions you have..."
              className="w-full min-h-[100px]"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>

          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-pulse-500 hover:bg-pulse-600"
          >
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining Waitlist...
              </>
            ) : (
              'Join Waiting List'
            )}
          </Button>

          {onClose && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              Cancel
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default WaitingListForm;
