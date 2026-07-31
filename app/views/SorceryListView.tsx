import React from 'react';
import { useRouter } from 'expo-router';
import { useSorceryListViewModel } from '../../viewmodels/useSorceryListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function SorceryListView() {
  const router = useRouter();
  const { sorceryOptions, isLoading } = useSorceryListViewModel();

  return (
    <EntityListView
      title="Sorceries"
      options={sorceryOptions}
      isLoading={isLoading}
      getSubtitle={(sorcery) => sorcery.description}
      getMeta={(sorcery) => (sorcery.cost != null ? `FP ${sorcery.cost}` : undefined)}
      onSelect={(sorcery) =>
        router.push({
          pathname: '/views/SorceryDetailsView',
          params: { query: sorcery.name },
        })
      }
    />
  );
}
