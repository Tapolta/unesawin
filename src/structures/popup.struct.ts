export interface PopUpProps {
  visible: boolean;
  closable: boolean;
  alignCenter?: boolean;
  size: 'sm' | 'md' | 'lg';
  onClose?: () => void
}