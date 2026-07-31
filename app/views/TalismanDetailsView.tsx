import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useTalismanDetailsViewModel } from '../../viewmodels/useTalismanDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function TalismanDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useTalismanDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((talisman) => {
        const sections: DetailsSection[] = talisman.effects
          ? [
              {
                title: "Effects",
                text: talisman.effects,
              },
            ]
          : [];

        return (
          <DetailItemView
            key={talisman.id}
            image={talisman.image}
            name={talisman.name}
            description={talisman.description}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
