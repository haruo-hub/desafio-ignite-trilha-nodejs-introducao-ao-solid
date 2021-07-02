import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.params;
        try {
            const turnedUser = this.turnUserAdminUseCase.execute({
                user_id,
            });
            return response.json(turnedUser);
        } catch (error) {
            return response.status(404).json({ error: error.message });
        }
    }
}

export { TurnUserAdminController };
