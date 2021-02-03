import axios, {
  AxiosAdapter,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosStatic,
} from "axios";
import jwt from "jsonwebtoken";
import {
  GET_USERS,
  POST_USER,
  PUT_USERS,
  DEL_USER,
  GET_USERS_BY_COHORTE,
  ERROR_MESSAGE,
  DELETE_USER_COHORTE,
  MIGRAR_USER_COHORTE,
  GET_USER_BY_TOKEN,
  GET_STUDENTS,
  USERS_GROUP,
  SEARCH_BY_NAME,
  PUT_NOTAS,
} from "../Constants/Users";
const url = "http://localhost:3001";

export const sendInvitation = (payload: any) => async (dispatch: any) => {
  try {
    const res: any = await axios.post(`${url}/mails`, payload);
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "Error al invitar alumnos",
    });
  }
};

export const getStudents = () => async (dispatch: any) => {
  try {
    const res: any = await axios.get(`${url}/users/estudiantes`);
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "Error al traer alumnos",
    });
  }
};

export const postUser = (payload: any) => async (dispatch: any) => {
  try {
    const res = await axios.post(`${url}/users/register`, payload);
    if (res) {
      const { email, password } = payload;
      const datos = { email, password };
      const newToken = await axios.post(`${url}/auth/login`, datos);
      if (newToken) {
        localStorage.setItem("userToken", newToken.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newToken.data}`;
      }
    }
    dispatch({
      type: POST_USER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "Problemas al registrar el usuario",
    });
  }
};

export const getUsersbyCohorte = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(`${url}/users/cohorte/${id}`);
    dispatch({
      type: GET_USERS_BY_COHORTE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas para encontrar los usuarios",
    });
  }
};

export const getUserByToken = (payload: any) => async (dispatch: any) => {
  try {
    localStorage.setItem("userToken", payload);
    axios.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
    const usuario = jwt.decode(payload);
    dispatch({
      type: GET_USER_BY_TOKEN,
      payload: usuario,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "No se encuentra el usuario",
    });
  }
};

export const deleteUserCohorte = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.delete(`${url}/users/cohorte/${id}`);
    dispatch({
      type: DELETE_USER_COHORTE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas para crear el usuario",
    });
  }
};

export const migrarUserCohorte = (id: string, cohorteName: string) => async (
  dispatch: any
) => {
  try {
    const res = await axios.put(`${url}/users/cohorte/${id}`, { cohorteName });
    dispatch({
      type: MIGRAR_USER_COHORTE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas para crear el usuario",
    });
  }
};

export const usersGroup = (id: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(`${url}/users/groupUsers/${id}`);
    dispatch({
      type: USERS_GROUP,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas para traer usuarios",
    });
  }
};

export const SearchByName = (payload: any) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      `${url}/users/search?firstname=${payload[0]}&lastname=${payload[1]}`
    );
    dispatch({
      type: SEARCH_BY_NAME,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problemas para buscar alumno",
    });
  }
};

export const putNotas = (historiaId: any, payload: any) => async (
  dispatch: any
) => {
  try {
    const res = await axios.put(`${url}/users/historia/${historiaId}`, payload);
    dispatch({
      type: PUT_NOTAS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MESSAGE,
      message: "Problema para guardar la nota del checkpoint",
    });
  }
};
