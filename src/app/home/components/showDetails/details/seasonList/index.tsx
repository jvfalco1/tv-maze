import React from 'react';
import { SectionList, SectionListData } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ListItem from './ListItem';
import { SectionTitle } from '@app/home/screens/showDetails/styles';
import { Episodes, Season } from '@commons/types/responses/shows';

type Props = {
  list: SectionListData<Episodes, Season>[];
};

const SeasonList: React.FC<Props> = ({ list }: Props) => {
  if (!list) {
    return null;
  }

  return (
    <SectionList
      keyExtractor={(_, index: number) => String(index)}
      renderItem={() => null}
      renderSectionHeader={({ section: { data, title } }) => {
        return (
          <>
            <SectionTitle>{title}</SectionTitle>
            <FlashList
              horizontal
              data={data}
              renderItem={({ item }) => <ListItem item={item} />}
              showsHorizontalScrollIndicator={false}
              estimatedItemSize={96}
            />
          </>
        );
      }}
      sections={list}
    />
  );
};

export default SeasonList;
