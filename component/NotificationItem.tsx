// components/NotificationItem.tsx
import Image from "next/image";

interface NotificationItemProps {
  profileImage: string;
  notificationText: string;
  senderName: string;
}

export default function NotificationItem({
  profileImage,
  notificationText,
  senderName,
}: NotificationItemProps) {
  return (
    <div className="flex items-center p-3 bg-orange-100 rounded-lg shadow-md hover:bg-orange-200 transition-all">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <Image src={profileImage} alt={`${senderName}'s profile`} width={40} height={40} />
      </div>
      <div>
        <strong className="block">{senderName}</strong>
        <span>{notificationText}</span>
      </div>
    </div>
  );
}