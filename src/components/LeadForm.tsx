import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner@2.0.3';

interface LeadFormProps {
  formType?: 'test-drive' | 'quote' | 'contact';
}

export default function LeadForm({ formType = 'contact' }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    message: '',
    preferredDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call - in production, this would send to your CRM/webhook
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Thank you! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        model: '',
        message: '',
        preferredDate: '',
      });
      setLoading(false);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#BFC6CC] mb-2">Full Name *</label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
            className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF] placeholder:text-[#BFC6CC]/50"
          />
        </div>

        <div>
          <label className="block text-sm text-[#BFC6CC] mb-2">Email *</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF] placeholder:text-[#BFC6CC]/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-[#BFC6CC] mb-2">Phone Number *</label>
          <Input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+971 50 123 4567"
            className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF] placeholder:text-[#BFC6CC]/50"
          />
        </div>

        <div>
          <label className="block text-sm text-[#BFC6CC] mb-2">Interested Model</label>
          <Select value={formData.model} onValueChange={(value) => handleChange('model', value)}>
            <SelectTrigger className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF]">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent className="bg-[#16181C] border-[#0EA5FF]/30">
              <SelectItem value="leopard-7">BYD Leopard 7</SelectItem>
              <SelectItem value="leopard-5">BYD Leopard 5</SelectItem>
              <SelectItem value="future">Future Models</SelectItem>
              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {formType === 'test-drive' && (
        <div>
          <label className="block text-sm text-[#BFC6CC] mb-2">Preferred Date</label>
          <Input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF]"
          />
        </div>
      )}

      <div>
        <label className="block text-sm text-[#BFC6CC] mb-2">Message</label>
        <Textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us more about your requirements..."
          rows={4}
          className="bg-[#16181C] border-[#0EA5FF]/30 text-[#E6F6FF] placeholder:text-[#BFC6CC]/50"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#007bff] text-white hover:shadow-lg hover:shadow-[#007bff]/50 transition-all duration-300"
      >
        {loading ? (
          <span>Sending...</span>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            <span>Submit</span>
          </>
        )}
      </Button>

      <p className="text-xs text-[#BFC6CC] text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
}