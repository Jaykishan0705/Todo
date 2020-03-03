import React from "react";
import FilterTab from "../FilterTab";
import {render, fireEvent} from '@testing-library/react'

test('changing tab',()=>{
   const handleTabChange = jest.fn();
   const tabOption = "@@filter/SHOW_ALL";
   const tab = "@@filter/ACTIVE";
   const text = "ACTIVE";

   const {getByTestId} = render(<FilterTab onTabChange={handleTabChange} tabOption={tabOption} currentTab={tab} text={text} />);

   fireEvent.click(getByTestId("2"));
   expect(handleTabChange).toHaveBeenCalledTimes(1);
   expect(handleTabChange).toHaveBeenCalledWith(tabOption);
});