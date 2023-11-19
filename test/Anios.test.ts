import { getAnios } from '../src/Models/Anios';
import axios from 'axios';
import { Response } from 'express';

jest.mock('axios');

describe('Anios.controller', () => {
  it('GET /years debería retornar un array con números', async () => {
    const mockedResponse = [2019, 2020, 2021, 2022, 2023];

    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockResolvedValue({ data: mockedResponse });

    const mockRes: Response = {
      send: jest.fn(),
      status: jest.fn(),
    } as unknown as Response;

    await getAnios(mockRes);

    expect(mockRes.send).toHaveBeenCalledWith(expect.any(Array));
    expect(mockRes.send).toHaveBeenCalledWith(mockedResponse);
    axiosSpy.mockRestore();
  });
});
