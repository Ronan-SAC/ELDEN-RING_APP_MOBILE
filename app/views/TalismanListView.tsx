import React from 'react';
import { useRouter } from 'expo-router';
import { useTalismanListViewModel } from '../../viewmodels/useTalismanListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function TalismanListView() {
  const router = useRouter();
  const { talismanOptions, isLoading } = useTalismanListViewModel();

  return (
    <EntityListView
      title="Talismans"
      options={talismanOptions}
      isLoading={isLoading}
      getSubtitle={(talisman) => talisman.description}
      onSelect={(talisman) =>
        router.push({
          pathname: '/views/TalismanDetailsView',
          params: { query: talisman.name },
        })
      }
    />
  );
}
