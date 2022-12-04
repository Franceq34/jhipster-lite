import { Optional } from '@/common/domain/Optional';
import { JhliteTheme } from '@/module/secondary/JhliteTheme';

export interface StorageTheme {
  get(): Optional<JhliteTheme>;
  set(theme: JhliteTheme): void;
}
