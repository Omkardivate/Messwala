﻿namespace BOL;

public class TodaysMenu
{
    public int messID { get; set; }
    public string menu { get; set; }
    public float price { get; set; }
    public bool avaibility { get; set; }

    public TodaysMenu(int messid, string menu, float price, bool avaibility)
    {
        this.messID = messid;
        this.menu = menu;
        this.price = price;
        this.avaibility = avaibility;
    }
}