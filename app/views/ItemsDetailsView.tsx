import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useItemsDetailsViewModel } from '../../viewmodels/useItemsDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function ItemsDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useItemsDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((item) => {
        const sections: DetailsSection[] = item.effect
          ? [
              {
                title: "Effect",
                text: item.effect,
                align: "center",
              },
            ]
          : [];

        return (
          <DetailItemView
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            info={[{ label: "Type", value: item.type }]}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
