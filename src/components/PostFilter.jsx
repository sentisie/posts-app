import React from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Search"
        type="text"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
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
