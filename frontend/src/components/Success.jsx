import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { ImCheckmark } from "react-icons/im";

const Success = () => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(true);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        < ImCheckmark className="mx-auto mb-4 h-14 w-14 text-green-500" />
                        <h3 className="mb-5 text-lg font-normal text-gray-700">
                            Your payment has been submitted successfully!
                        </h3>
                        <p className="mb-5 text-sm font-light text-gray-500">
                            Thank you for your transaction. If you have any questions, please contact support.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={() => setOpenModal(false)}>
                                Great, thanks!
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Success;
