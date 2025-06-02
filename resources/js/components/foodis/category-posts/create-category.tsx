import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const CreateCategory=()=>{
    const [name, setName] = useState("");

    const handleSubmit = async (ev) => {
        ev.preventDefault();
       try {
            const { data } = await axios.post('/posts/categories-store', { name });
            return data;
        } catch (error) {
            console.error('Error creating tag:', error);
            throw error;
        }
    };
    return(<>
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg space-y-4">
    <Input type="text"  onChange={(ev) => setName(ev.target.value)} />
      <button
                    type="submit"
                    className="px-3 py-1 border rounded"
                >
                    Cancel
                </button>
    </form>
    </>)

}
export default CreateCategory;