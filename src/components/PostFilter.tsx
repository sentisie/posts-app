import React, { FC } from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

export interface PostFilterProps {
  filter: {
    query: string;
    sort: string;
  };
  setFilter: (filter: { query: string; sort: string }) => void;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Search"
        type="text"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort: string) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={'Filter'}
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By body' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
