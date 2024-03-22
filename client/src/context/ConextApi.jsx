import useUserContext from './UserContext';
import { getAllBooks } from '../services/BookService';

// const { token } = useUserContext();

export const gettAllBooksContext = async () => {
    return getAllBooks(token)
}