import './pracing.css'



export default function Table() {





    return(

        <table class="styled-table">
    <thead>
        <tr>
            <th></th>
            <th>High school</th>
            <th>Undergrad. (yrs. 1-2)</th>
            <th>Undergrad. (yrs. 3-4)</th>
            <th>Graduate</th>
            <th>PhD</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1 month *</td>
            <td>n/a</td>
            <td>n/a</td>
            <td>$18</td>
            <td>$23</td>
            <td>$27</td>
        </tr>
        <tr class="active-row">
        <td>14 days</td>
            <td>$10</td>
            <td>$15</td>
            <td>$20</td>
            <td>$25</td>
            <td>$29</td>
        </tr>
        <tr>
            <td>7 days</td>
            <td>$16</td>
            <td>$17</td>
            <td>$21</td>
            <td>$27</td>
            <td>$31</td>
        </tr>
        <tr class="active-row">
        <td>5 days</td>
            <td>$18</td>
            <td>$19</td>
            <td>$23</td>
            <td>$29</td>
            <td>$35</td>
        </tr>
        <tr>
            <td>3 days</td>
            <td>$20</td>
            <td>$24</td>
            <td>$28</td>
            <td>$33</td>
            <td>$37</td>
        </tr>
        <tr class="active-row">
        <td>48 hours</td>
            <td>$24</td>
            <td>$26</td>
            <td>$30</td>
            <td>$36</td>
            <td>$45</td>
        </tr>
        <tr>
            <td>24 hours</td>
            <td>$27</td>
            <td>$30</td>
            <td>$32</td>
            <td>$39</td>
            <td>$50</td>
        </tr>
        <tr class="active-row">
        <td>8 hours</td>
            <td>$34</td>
            <td>$39</td>
            <td>$41</td>
            <td>$48</td>
            <td>$58</td>
        </tr>
        <tr>
            <td>4 hours</td>
            <td>$39</td>
            <td>$43</td>
            <td>$51</td>
            <td>$61</td>
            <td>$73</td>
        </tr>
    </tbody>
</table>
    )
}