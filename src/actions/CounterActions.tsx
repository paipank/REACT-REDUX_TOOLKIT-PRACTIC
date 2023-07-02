import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCounterData =  createAsyncThunk(
    'counter/fetchData',
    async (value: number) => {
        const job = new Promise<number>((reslove, reject) => {
            setTimeout(() => {
                if (value > 0) {
                    reslove(0)
                } else {
                    reject(Error(""))
                }
            }, 1000) 
        })

        return await job
    }
)

