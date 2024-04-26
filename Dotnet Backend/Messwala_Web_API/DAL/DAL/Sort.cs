namespace DAL;

using BOL;
using System;

public class Sort
{
    public static void BubbleSort(ref Mess[] Arr) {
        int pass = 0;
        int loop = 0;

        for (pass = 0; pass <= Arr.Length - 2; pass++) {
            for (loop = 0; loop <= Arr.Length - 2; loop++) {
                if (Arr[loop].rating < Arr[loop + 1].rating) {
                    Mess temp = Arr[loop + 1];
                    Arr[loop + 1] = Arr[loop];
                    Arr[loop] = temp;
                }
            }
        }
    }
}