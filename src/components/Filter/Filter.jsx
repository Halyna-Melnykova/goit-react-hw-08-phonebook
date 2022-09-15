import Form from 'react-bootstrap/Form';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
// import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <Form.Floating className="mb-3">
      <Form.Control
        id="floatingInputCustom"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
      <label htmlFor="floatingInputCustom">Find contacts by name</label>
    </Form.Floating>
  );
};

export default Filter;
