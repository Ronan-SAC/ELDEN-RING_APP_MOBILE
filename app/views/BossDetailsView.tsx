import { useLocalSearchParams } from "expo-router";
import React from 'react';
import { useBossDetailsViewModel } from "../../viewmodels/useBossDetailsViewModel";
import { DetailPage } from "../../components/DetailPage";
import { DetailItemView, DetailsSection } from "../../components/DetailItemView";

export default function BossDetailsView() {
  const { bossQuery } = useLocalSearchParams();
  const { data, isLoading } = useBossDetailsViewModel(bossQuery as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((boss) => {
        const sections: DetailsSection[] = boss.drops?.length
          ? [{ title: "Drops", lines: boss.drops }]
          : [];

        return (
          <DetailItemView
            key={boss.id}
            image={boss.image}
            name={boss.name}
            description={boss.description}
            info={[
              { label: "Region", value: boss.region },
              { label: "Location", value: boss.location },
              { label: "Health", value: boss.healthPoints },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
