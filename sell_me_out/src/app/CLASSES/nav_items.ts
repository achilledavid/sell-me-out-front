export interface nav_items {
  name?: string;
  route?: string;
  icon?: string;
  children?: nav_items[];
  round: boolean;
  notification: boolean;
  notification_count?: string;
}
