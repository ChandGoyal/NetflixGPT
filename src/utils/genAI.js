import { GoogleGenerativeAI } from "@google/generative-ai";
import { GENAI_KEY } from "./Constants";

export const genAI = new GoogleGenerativeAI(GENAI_KEY);
