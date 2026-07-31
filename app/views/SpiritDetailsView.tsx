import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useSpiritDetailsViewModel } from '../../viewmodels/useSpiritDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function SpiritDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useSpiritDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((spirit) => {
        const sections: DetailsSection[] = spirit.effects
          ? [
              {
                title: "Effects",
                text: spirit.effects,
              },
            ]
          : [];

        return (
          <DetailItemView
            key={spirit.id}
            image={spirit.image}
            name={spirit.name}
            description={spirit.description}
            info={[
              { label: "FP Cost", value: String(spirit.fpCost) },
              { label: "HP Cost", value: String(spirit.hpCost) },
            ]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
