import { defineComponent, inject, onMounted, ref } from 'vue';
import { IconVue } from '@/common/primary/icon';
import { Statistics } from '@/common/domain/Statistics';
import { Loader } from '@/loader/primary/Loader';
import { StatisticsRepository } from '@/common/domain/StatisticsRepository';
import { StorageTheme } from '@/common/domain/StorageTheme';

export default defineComponent({
  name: 'Header',

  components: {
    IconVue,
  },

  setup() {
    const selectorPrefix = 'header';
    const statisticsRepository = inject('statistics') as StatisticsRepository;
    const storageTheme = inject('storageTheme') as StorageTheme;
    const statistics = ref(Loader.loading<Statistics>());

    onMounted(() => {
      statisticsRepository.get().then(response => loadStatistics(response));
    });

    const loadStatistics = (response: Statistics): void => {
      statistics.value.loaded(response);
    };

    const appliedModulesCount = (): number => {
      return statistics.value.value().get();
    };

    const switchTheme = (): void => {
      if (storageTheme.get().orElse('default') === 'default') {
        storageTheme.set('dark');
      } else {
        storageTheme.set('default');
      }
    };

    return {
      selectorPrefix,
      statistics,
      appliedModulesCount,
      switchTheme,
    };
  },
});
