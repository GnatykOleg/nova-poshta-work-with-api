import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import {
  departmentsPageSelector,
  departmentsTotalCountSelector,
} from "../../../redux/selectors/departmentsSelectors";
import {
  setDepartmentsSelectValue,
  setFindDepartmentByRef,
  setPage,
} from "../../../redux/slices/departmentsSlice";

import { useAppDispatch } from "../../../hooks/reduxHooks";

import * as Styled from "./DepartmentsPagination.styled";

const DepartmentsPagination: React.FC = () => {
  const dispatch = useAppDispatch();

  // Get total count of departments from redux store
  const { totalCount } = useAppSelector(departmentsTotalCountSelector);

  // Get page value from redux store
  const page = useAppSelector(departmentsPageSelector);

  const paginationOnChange = (value: number) => {
    dispatch(setPage(value));
    dispatch(setFindDepartmentByRef(""));
    dispatch(
      setDepartmentsSelectValue({
        value: `Відділення для поточної сторiнки`,
        label: `Відділення для поточної сторiнки`,
      })
    );
  };

  return (
    <Styled.MyBox>
      <Stack spacing={2}>
        <Pagination
          onChange={(_, value: number) => paginationOnChange(value)}
          count={Math.ceil(totalCount / 12)}
          page={page}
          shape="rounded"
        />
      </Stack>
    </Styled.MyBox>
  );
};

export default DepartmentsPagination;
