import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useArmorDetailsViewModel } from '../../viewmodels/useArmorDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function ArmorDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useArmorDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((armor) => {
        const sections: DetailsSection[] = [
          ...(armor.dmgNegation?.length
            ? [
                {
                  title: "Damage Negation",
                  rows: armor.dmgNegation.map((stat) => ({
                    label: stat.name,
                    value: String(stat.amount),
                  })),
                },
              ]
            : []),
          ...(armor.resistance?.length
            ? [
                {
                  title: "Resistance",
                  rows: armor.resistance.map((stat) => ({
                    label: stat.name,
                    value: String(stat.amount),
                  })),
                },
              ]
            : []),
        ];

        return (
          <DetailItemView
            key={armor.id}
            image={armor.image}
            name={armor.name}
            description={armor.description}
            info={[
              { label: "Category", value: armor.category },
              { label: "Weight", value: `${armor.weight} kg` },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
