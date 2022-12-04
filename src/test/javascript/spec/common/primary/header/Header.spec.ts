import { Statistics } from '@/common/domain/Statistics';
import { StatisticsRepository } from '@/common/domain/StatisticsRepository';
import { HeaderVue } from '@/common/primary/header';
import { flushPromises, shallowMount, VueWrapper } from '@vue/test-utils';
import sinon, { SinonStub } from 'sinon';
import { wrappedElement } from '../../../WrappedElement';
import { describe, it, expect } from 'vitest';
import { StorageTheme } from '@/common/domain/StorageTheme';
import { Optional } from '@/common/domain/Optional';

let wrapper: VueWrapper;
let component: any;

export interface StatisticsRepositoryStub extends StatisticsRepository {
  get: SinonStub;
}

export const stubStatisticsRepository = (): StatisticsRepositoryStub => ({ get: sinon.stub() } as StatisticsRepositoryStub);

export interface StorageThemeStub extends StorageTheme {
  get: SinonStub;
  set: SinonStub;
}

export const stubStorageTheme = (): StorageThemeStub => ({
  get: sinon.stub(),
  set: sinon.stub(),
});

interface WrapperOptions {
  statistics: StatisticsRepository;
  storageTheme: StorageThemeStub;
}

const wrap = (options?: Partial<WrapperOptions>): void => {
  const { statistics, storageTheme }: WrapperOptions = {
    statistics: repositoryWithStatistics(),
    storageTheme: stubStorageTheme(),
    ...options,
  };

  wrapper = shallowMount(HeaderVue, {
    global: {
      stubs: ['router-link'],
      provide: {
        statistics,
        storageTheme,
      },
    },
  });
  component = wrapper.vm;
};

describe('Header', () => {
  it('should exist', () => {
    wrap();

    expect(wrapper.exists()).toBe(true);
  });

  it('should load statistics', async () => {
    wrap();
    await flushPromises();

    expect(wrapper.find(wrappedElement('statistics')).exists()).toBe(true);
  });

  it('should set dark theme', async () => {
    const storageTheme = stubStorageTheme();
    storageTheme.get.returns(Optional.empty());
    wrap({ storageTheme });
    await flushPromises();

    component.switchTheme();

    const { args } = storageTheme.set.getCall(0);
    expect(args).toEqual(['dark']);
  });

  it('should set default theme', async () => {
    const storageTheme = stubStorageTheme();
    storageTheme.get.returns(Optional.of('dark'));
    wrap({ storageTheme });
    await flushPromises();

    component.switchTheme();

    const { args } = storageTheme.set.getCall(0);
    expect(args).toEqual(['default']);
  });
});

const repositoryWithStatistics = (): StatisticsRepositoryStub => {
  const statistics = stubStatisticsRepository();
  statistics.get.resolves(new Statistics(10000));

  return statistics;
};
