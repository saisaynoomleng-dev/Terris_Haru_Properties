// Bounded Props
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'padded' | 'unpadded';
  as?: React.ElementType;
};
