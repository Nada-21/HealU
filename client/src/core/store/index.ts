import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import nutrition from "../../modules/clinics-portals/nutrition/slices/nutritionSlice";
import devices from "../../modules/clinics-portals/pediatric/slices/pediatric-slice";
import schedules from "../../modules/clinics-portals/pediatric/slices/Schedule-slice";
import patients from "../../modules/clinics-portals/pediatric/slices/patient-slice"
import auth from "../../modules/auth/slices/auth-slice";
import user from "../../modules/user/slices/user-slice";
export const store = configureStore({
    reducer: {
        auth,
        devices,
        schedules,
        patients,
        user,
        nutrition,
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
