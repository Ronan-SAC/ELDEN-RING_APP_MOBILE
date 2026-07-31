import React from 'react';
import { useRouter } from 'expo-router';
import { useClassListViewModel } from '../../viewmodels/useClassListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function ClassListView() {
  const router = useRouter();
  const { classOptions, isLoading } = useClassListViewModel();

  return (
    <EntityListView
      title="Classes"
      options={classOptions}
      isLoading={isLoading}
      getSubtitle={(cls) => cls.description}
      getMeta={(cls) => (cls.stats?.level ? `Nv ${cls.stats.level}` : undefined)}
      onSelect={(cls) =>
        router.push({
          pathname: '/views/ClassDetailsView',
          params: { query: cls.name },
        })
      }
    />
  );
}
