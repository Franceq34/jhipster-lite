import { HeaderVue } from '@/common/primary/header';
import { ToastVue } from '@/common/primary/toast';
import { inject } from 'vue';
import { StorageTheme } from '@/common/domain/StorageTheme';
import { BodyThemeApplier } from '@/common/primary/theme/BodyThemeApplier';

export default {
  name: 'App',
  components: {
    ToastVue,
    HeaderVue,
  },

  setup() {
    const themeApplier = inject('themeApplier') as BodyThemeApplier;
    const storageTheme = inject('storageTheme') as StorageTheme;
    const maybeTheme = storageTheme.get();

    themeApplier.set(maybeTheme);
  },
};
