import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const phoneNumber = "79124244242";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
    onClose();
  };

  const handleTelegram = () => {
    window.open(`https://t.me/+${phoneNumber}`, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-workshop-primary">
            Выберите способ связи
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 p-4">
          <Button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Icon name="MessageCircle" className="w-6 h-6" />
            WhatsApp
          </Button>

          <Button
            onClick={handleTelegram}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Icon name="Send" className="w-6 h-6" />
            Telegram
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
