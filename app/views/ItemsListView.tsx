import React from 'react';
import { useRouter } from 'expo-router';
import { useItemsListViewModel } from '../../viewmodels/useItemsListViewModel';
import { EntityListView } from '../../components/EntityListView';

export default function ItemsListView() {
  const router = useRouter();
  const { itemOptions, isLoading } = useItemsListViewModel();

  return (
    <EntityListView
      title="Key Items"
      options={itemOptions}
      isLoading={isLoading}
      getSubtitle={(item) => item.description}
      getMeta={(item) => item.type}
      onSelect={(item) =>
        router.push({
          pathname: "/views/ItemsDetailsView",
          params: { query: item.name },
        })
      }
    />
  );
}
