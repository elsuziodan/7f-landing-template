import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const Icon = (LucideIcons as any)[name];
  
  if (!Icon) {
    // Fallback if icon name is invalid
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <Icon {...props} />;
};
