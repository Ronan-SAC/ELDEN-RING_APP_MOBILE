import React from 'react';
import { useRouter } from 'expo-router';
import { useCreatureListViewModel } from '../../viewmodels/useCreatureListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function CreatureListView() {
  const router = useRouter();
  const { creatureOptions, isLoading } = useCreatureListViewModel();

  return (
    <EntityListView
      title="Creatures"
      options={creatureOptions}
      isLoading={isLoading}
      getSubtitle={(creature) => creature.description}
      getMeta={(creature) => creature.location}
      onSelect={(creature) =>
        router.push({
          pathname: '/views/CreatureDetailsView',
          params: { query: creature.name },
        })
      }
    />
  );
}
