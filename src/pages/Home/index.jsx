import { Button, Gap, PostItem } from "../../components"
import Swal from "sweetalert2"
import './home.css'

function Home() {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No No No"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
        });
    }
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Tambah Post Baru" />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                <PostItem 
                    image="https://picsum.photos/800"
                    title="Image Title"
                    name="John Doe"
                    date="18 Jul 2024"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla metus sapien, ac lacinia ante maximus id. Aenean id lorem elit. Duis finibus a mauris ac fringilla."
                    onDelete={() => handleDelete()}
                />
            </div>
        </div>
    )
}
export default Home