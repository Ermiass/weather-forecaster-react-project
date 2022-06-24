import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getLocation from './Api';

test('test the geocoder api ', async () => {
  const input = 'Virginia';
  const returnVal = await getLocation(input);
  expect(returnVal.data[0].lon).toEqual('-78.4927721');
});
test('test the geocoder api ', async () => {
  const places = 'Virginia';
  const returnVal = await getLocation(places);
  expect(returnVal.data[0].lat).toEqual('37.1232245');
});

// test('test the geocoder api ', async () => {
//   const input = 'x43frschgg';
//   const returnVal = await getLocation(input);
//   expect(returnVal.data[0].lat).toEqual('erorr');
// });
