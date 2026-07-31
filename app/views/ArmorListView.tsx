import React from 'react';
import { useRouter } from 'expo-router';
import { useArmorListViewModel } from '../../viewmodels/useArmorListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function ArmorListView() {
  const router = useRouter();
  const { armorOptions, isLoading } = useArmorListViewModel();

  return (
    <EntityListView
      title="Armor"
      options={armorOptions}
      isLoading={isLoading}
      getSubtitle={(armor) => armor.description}
      getMeta={(armor) => (armor.weight != null ? `${armor.weight} kg` : undefined)}
      onSelect={(armor) =>
        router.push({
          pathname: '/views/ArmorDetailsView',
          params: { query: armor.name },
        })
      }
    />
  );
}
