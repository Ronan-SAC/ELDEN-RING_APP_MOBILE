import React from 'react';
import { useRouter } from 'expo-router';
import { useAshOfWarListViewModel } from '../../viewmodels/useAshOfWarListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function AshOfWarListView() {
  const router = useRouter();
  const { ashOfWarOptions, isLoading } = useAshOfWarListViewModel();

  return (
    <EntityListView
      title="Ashes of War"
      options={ashOfWarOptions}
      isLoading={isLoading}
      getSubtitle={(ash) => ash.description}
      getMeta={(ash) => ash.affinity}
      onSelect={(ash) =>
        router.push({
          pathname: '/views/AshOfWarDetailsView',
          params: { query: ash.name },
        })
      }
    />
  );
}
