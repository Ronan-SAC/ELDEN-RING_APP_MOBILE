import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useClassDetailsViewModel } from '../../viewmodels/useClassDetailsViewModel';
import { DetailPage } from '../../components/DetailPage';
import { DetailItemView, DetailsSection } from '../../components/DetailItemView';

export default function ClassDetailsView() {
  const { query } = useLocalSearchParams();
  const { data, isLoading } = useClassDetailsViewModel(query as string);

  return (
    <DetailPage isLoading={isLoading}>
      {data.map((cls) => {
        const sections: DetailsSection[] = cls.stats
          ? [
              {
                title: "Starting Stats",
                rows: Object.entries(cls.stats).map(([key, value]) => ({
                  label: key,
                  value: String(value),
                })),
              },
            ]
          : [];

        return (
          <DetailItemView
            key={cls.id}
            image={cls.image}
            name={cls.name}
            description={cls.description}
            sections={sections}
          />
        );
      })}
    </DetailPage>
  );
}
