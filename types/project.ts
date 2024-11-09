export interface ProjectCardDataProps {
  id?: string;
  name?: string;
  description?: string;
  targetAmount?: number;
  amountRaised?: number;
  donationCount?: number;
  image?: string;
}
export interface DonateCardDataProps {
  id?: string;
  title?: string;
  description?: string;
  goal?: number;
  raised?: number;
  donations?: number;
  imageUrl?: string;
  imgGallery?: string[];
}
export interface userDashbordCard {
  id?: string;
  title?: string;
  description?: string;
  goal?: number;
  raised?: number;
  donations?: number;
  imageUrl?: string;
  imgGallery?: string[];
}
