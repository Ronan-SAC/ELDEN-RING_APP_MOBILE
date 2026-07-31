import { useRouter } from "expo-router";
import React from 'react';
import { useBossListViewModel } from "../../viewmodels/useBossListViewModel";
import { EntityListView } from "../../components/EntityListView";

export default function BossListView() {
  const router = useRouter();
  const { bossOptions, isLoading } = useBossListViewModel();

  return (
    <EntityListView
      title="Legendary Bosses"
      options={bossOptions}
      isLoading={isLoading}
      getSubtitle={(boss) => boss.description}
      getMeta={(boss) => boss.location}
      onSelect={(boss) =>
        router.push({
          pathname: "/views/BossDetailsView",
          params: { bossQuery: boss.name },
        })
      }
    />
  );
}
