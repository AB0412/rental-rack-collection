
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface RentalItemGalleryProps {
  image: string;
  name: string;
  additionalImages?: string[];
}

const RentalItemGallery = ({ image, name, additionalImages }: RentalItemGalleryProps) => {
  return (
    <div className="flex flex-col justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <img 
            src={image} 
            alt={name} 
            className="h-48 object-contain mb-4 cursor-pointer hover:opacity-90 transition-opacity"
          />
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <img 
            src={image} 
            alt={name}
            className="w-full object-contain max-h-[70vh]" 
          />
        </DialogContent>
      </Dialog>
      
      {additionalImages && additionalImages.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mt-2">
          {additionalImages.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <img 
                  key={index}
                  src={img} 
                  alt={`${name} view ${index + 1}`} 
                  className="h-24 w-full object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                />
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{`${name} - View ${index + 1}`}</DialogTitle>
                </DialogHeader>
                <img 
                  src={img}
                  alt={`${name} view ${index + 1}`}
                  className="w-full object-contain max-h-[70vh]" 
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalItemGallery;
