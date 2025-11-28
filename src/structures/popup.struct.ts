export interface PopUpProps {
  visible: boolean;
  closable: boolean;
  alignCenter?: boolean;
  overflow?: boolean;
  size: 'sm' | 'md' | 'lg';
  onClose?: () => void
}