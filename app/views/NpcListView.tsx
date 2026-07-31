import React from 'react';
import { useRouter } from 'expo-router';
import { useNpcListViewModel } from '../../viewmodels/useNpcListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function NpcListView() {
  const router = useRouter();
  const { npcOptions, isLoading } = useNpcListViewModel();

  return (
    <EntityListView
      title="NPCs"
      options={npcOptions}
      isLoading={isLoading}
      getSubtitle={(npc) => npc.role}
      getMeta={(npc) => npc.location}
      onSelect={(npc) =>
        router.push({
          pathname: '/views/NpcDetailsView',
          params: { query: npc.name },
        })
      }
    />
  );
}
