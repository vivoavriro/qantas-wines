import { Product } from '@services/fetchWineList/fetchWineList.types';

export interface ProductCardProps extends Product {
  onAddClick?: () => undefined;
}
